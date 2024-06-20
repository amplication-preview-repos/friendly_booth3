import { Module } from "@nestjs/common";
import { CartModule } from "./cart/cart.module";
import { CartItemModule } from "./cartItem/cartItem.module";
import { OrderModule } from "./order/order.module";
import { ProductModule } from "./product/product.module";
import { UserModule } from "./user/user.module";
import { DiscountModule } from "./discount/discount.module";
import { OtpModule } from "./Otp/otp.module";
import { OtpVerificationModule } from "./OtpVerification/otpverification.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CartModule,
    CartItemModule,
    OrderModule,
    ProductModule,
    UserModule,
    DiscountModule,
    OtpModule,
    OtpVerificationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
