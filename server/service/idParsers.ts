import { z } from 'zod';
import type { BulletId, EnemyId, TaskId, UserId } from '../commonTypesWithClient/branded';

export const UserIdParser: z.ZodType<UserId> = z.string().brand<'UserId'>();

export const taskIdParser: z.ZodType<TaskId> = z.string().brand<'TaskId'>();

export const EnemyIdParser: z.ZodType<EnemyId> = z.string().brand<'EnemyId'>();

export const BulletIdParser: z.ZodType<BulletId> = z.string().brand<'BulletId'>();
