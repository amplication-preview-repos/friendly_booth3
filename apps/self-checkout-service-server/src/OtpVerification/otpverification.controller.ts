import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OtpVerificationService } from "./otpverification.service";

@swagger.ApiTags("otpVerifications")
@common.Controller("otpVerifications")
export class OtpVerificationController {
  constructor(protected readonly service: OtpVerificationService) {}

  @common.Get("/:id/send-otp")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendOtp(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SendOtp(body);
      }
}
