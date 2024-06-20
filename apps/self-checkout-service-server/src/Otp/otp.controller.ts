import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OtpService } from "./otp.service";
import { SendOtpInput } from "../otpVerification/SendOtpInput";

@swagger.ApiTags("otps")
@common.Controller("otps")
export class OtpController {
  constructor(protected readonly service: OtpService) {}

  @common.Post("/verify-otp")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VerifyOtp(
    @common.Body()
    body: SendOtpInput
  ): Promise<string> {
        return this.service.VerifyOtp(body);
      }
}
