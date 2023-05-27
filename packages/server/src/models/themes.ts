import {
  DataType,
  Model,
  Table,
  Column,
  AllowNull,
  Unique,
  Index,
  HasMany,
} from 'sequelize-typescript'

import { UserThemeModel } from './userTheme'

@Table({ modelName: 'site_themes' })
export class SiteThemeModel extends Model {
  @Index
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  theme_name: string

  @HasMany(() => UserThemeModel, 'parent_id')
  user_themes: Array<UserThemeModel>
}
