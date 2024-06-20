import { Injectable } from "@nestjs/common";
import { SendOtpInput } from "../otpVerification/SendOtpInput";

@Injectable()
export class OtpService {
  constructor() {}
  async VerifyOtp(args: SendOtpInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
