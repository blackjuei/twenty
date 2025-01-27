import {
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { subject } from '@casl/ability';

import { IAbilityHandler } from 'src/ability/interfaces/ability-handler.interface';

import { PrismaService } from 'src/database/prisma.service';
import { AbilityAction } from 'src/ability/ability.action';
import { AppAbility } from 'src/ability/ability.factory';
import { PipelineWhereInput } from 'src/core/@generated/pipeline/pipeline-where.input';
import { assert } from 'src/utils/assert';

class PipelineArgs {
  where?: PipelineWhereInput;
}

@Injectable()
export class ManagePipelineAbilityHandler implements IAbilityHandler {
  async handle(ability: AppAbility) {
    return ability.can(AbilityAction.Manage, 'Pipeline');
  }
}

@Injectable()
export class ReadPipelineAbilityHandler implements IAbilityHandler {
  handle(ability: AppAbility) {
    return ability.can(AbilityAction.Read, 'Pipeline');
  }
}

@Injectable()
export class CreatePipelineAbilityHandler implements IAbilityHandler {
  handle(ability: AppAbility) {
    return ability.can(AbilityAction.Create, 'Pipeline');
  }
}

@Injectable()
export class UpdatePipelineAbilityHandler implements IAbilityHandler {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(ability: AppAbility, context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context);
    const args = gqlContext.getArgs<PipelineArgs>();
    const pipeline = await this.prismaService.pipeline.findFirst({
      where: args.where,
    });
    assert(pipeline, '', NotFoundException);

    return ability.can(AbilityAction.Update, subject('Pipeline', pipeline));
  }
}

@Injectable()
export class DeletePipelineAbilityHandler implements IAbilityHandler {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(ability: AppAbility, context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context);
    const args = gqlContext.getArgs<PipelineArgs>();
    const pipeline = await this.prismaService.pipeline.findFirst({
      where: args.where,
    });
    assert(pipeline, '', NotFoundException);

    return ability.can(AbilityAction.Delete, subject('Pipeline', pipeline));
  }
}
