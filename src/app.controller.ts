import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Dogs')
@Controller('dogs')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  async getDogs() {
    return await this.appService.getDogs();
  }
}
