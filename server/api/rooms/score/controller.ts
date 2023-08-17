import { playerUsecase } from '$/Usecase/playerUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async () => ({
    status: 200,
    body: await playerUsecase.addScorePlayer(),
  }),
}));
