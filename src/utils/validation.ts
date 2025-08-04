import { ValidationErrors, FormData } from "@/types/auth";

export const validatePhone = (phone: string): string | undefined => {
  if (!phone) {
    return "شماره تلفن الزامی است";
  }

  // Iranian phone number validation
  const iranianPhoneRegex = /^(09|\+989|989|9)\d{9}$/;

  if (!iranianPhoneRegex.test(phone)) {
    return "شماره تلفن معتبر نیست. لطفاً شماره تلفن ایران را وارد کنید";
  }

  return undefined;
};

export const validateForm = (data: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  const phoneError = validatePhone(data.phone);
  if (phoneError) {
    errors.phone = phoneError;
  }

  return errors;
};

export type { ValidationErrors };
