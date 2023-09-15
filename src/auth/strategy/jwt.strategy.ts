import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private config: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: ('JWT_SECRET'), // Retrieve the secret key from ConfigService
          });
    }

    validate(payload: any) {
        console.log(payload,)
        return payload
    }

}
