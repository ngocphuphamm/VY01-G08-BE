import { Column, Entity, Index, OneToMany } from "typeorm";
import { DetailMenu } from "./DetailMenu";
import { ListImagesFood } from "./ListImagesFood";

@Index("PK__Food__69D92BAA3881AACF", ["idFood"], { unique: true })
@Entity("Food", { schema: "dbo" })
export class Food {
  @Column("varchar", { primary: true, name: "idFood", length: 255 })
  idFood: string;

  @Column("nvarchar", { name: "nameFood", length: 255 })
  nameFood: string;

  @Column("float", { name: "priceFood", precision: 53 })
  priceFood: number;

  @Column("datetime", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => DetailMenu, (detailMenu) => detailMenu.idFood2)
  detailMenus: DetailMenu[];

  @OneToMany(() => DetailMenu, (detailMenu) => detailMenu.idFood3)
  detailMenus2: DetailMenu[];

  @OneToMany(() => DetailMenu, (detailMenu) => detailMenu.idFood4)
  detailMenus3: DetailMenu[];

  @OneToMany(() => ListImagesFood, (listImagesFood) => listImagesFood.idFood2)
  listImagesFoods: ListImagesFood[];

  @OneToMany(() => ListImagesFood, (listImagesFood) => listImagesFood.idFood3)
  listImagesFoods2: ListImagesFood[];

  @OneToMany(() => ListImagesFood, (listImagesFood) => listImagesFood.idFood4)
  listImagesFoods3: ListImagesFood[];
}
