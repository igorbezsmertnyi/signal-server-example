import { EntityRepository, Repository } from 'typeorm';
import { Channel } from '../entity/Channel';

@EntityRepository(Channel)
export class ChannelRepository extends Repository<Channel> {
  findByToken(token: string) {
    return this.findOne({ token });
  }
};
