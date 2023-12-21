import { Controller, Get } from '@nestjs/common';
import { PingService } from './ping.service';

@Controller()
export class PingController {
    constructor(private pingService: PingService) {}

    @Get()
    ping() {
        return this.pingService.ping();
    }
}
