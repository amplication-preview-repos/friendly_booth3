import { Module } from "@nestjs/common";
import { OtpVerificationService } from "./otpverification.service";
import { OtpVerificationController } from "./otpverification.controller";
import { OtpVerificationResolver } from "./otpverification.resolver";

@Module({
  controllers: [OtpVerificationController],
  providers: [OtpVerificationService, OtpVerificationResolver],
  exports: [OtpVerificationService],
})
export class OtpVerificationModule {}
