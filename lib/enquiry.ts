export type EnquiryField =
  | "name"
  | "business"
  | "email"
  | "whatsapp"
  | "need"
  | "timeline"
  | "message";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<EnquiryField, string>>;
};

export const initialEnquiryState: EnquiryState = {
  status: "idle",
  message: "",
  errors: {},
};
