import { Module } from '@nestjs/common';
import { PingModule } from './ping/ping.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PingModule, AuthModule],
})
export class AppModule {}
