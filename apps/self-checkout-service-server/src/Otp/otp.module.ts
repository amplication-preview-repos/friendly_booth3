import { Module } from "@nestjs/common";
import { OtpService } from "./otp.service";
import { OtpController } from "./otp.controller";
import { OtpResolver } from "./otp.resolver";

@Module({
  controllers: [OtpController],
  providers: [OtpService, OtpResolver],
  exports: [OtpService],
})
export class OtpModule {}
