import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from './DateTimeFilter';
import { DateTimeNullableFilter } from './DateTimeNullableFilter';
import { StringFilter } from './StringFilter';
import { UserRelationFilter } from './UserRelationFilter';
import { WorkspaceRelationFilter } from './WorkspaceRelationFilter';

@TypeGraphQL.InputType('WorkspaceMemberWhereInput', {
  isAbstract: true,
})
export class WorkspaceMemberWhereInput {
  @TypeGraphQL.Field((_type) => [WorkspaceMemberWhereInput], {
    nullable: true,
  })
  AND?: WorkspaceMemberWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [WorkspaceMemberWhereInput], {
    nullable: true,
  })
  OR?: WorkspaceMemberWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [WorkspaceMemberWhereInput], {
    nullable: true,
  })
  NOT?: WorkspaceMemberWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  deletedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  workspaceId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => WorkspaceRelationFilter, {
    nullable: true,
  })
  workspace?: WorkspaceRelationFilter | undefined;
}