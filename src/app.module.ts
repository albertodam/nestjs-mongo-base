import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [
    MongooseModule.forRoot('chainconnectiondb', {useNewUrlParser: true}),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
