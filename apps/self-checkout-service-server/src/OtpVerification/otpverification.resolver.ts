import * as graphql from "@nestjs/graphql";
import { OtpVerificationService } from "./otpverification.service";

export class OtpVerificationResolver {
  constructor(protected readonly service: OtpVerificationService) {}

  @graphql.Query(() => String)
  async SendOtp(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SendOtp(args);
  }
}
