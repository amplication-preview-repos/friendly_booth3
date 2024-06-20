import * as graphql from "@nestjs/graphql";
import { SendOtpInput } from "../otpVerification/SendOtpInput";
import { OtpService } from "./otp.service";

export class OtpResolver {
  constructor(protected readonly service: OtpService) {}

  @graphql.Mutation(() => String)
  async VerifyOtp(
    @graphql.Args()
    args: SendOtpInput
  ): Promise<string> {
    return this.service.VerifyOtp(args);
  }
}
