import { Injectable } from "@nestjs/common";

@Injectable()
export class OtpVerificationService {
  constructor() {}
  async SendOtp(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
