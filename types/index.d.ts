interface Locale {
  id?: number;
  cg_name?: string;
  cg_description?: string;
  cg_title?: string;
  cg_slug?: string;
  meta_description?: string;
  meta_keywords?: string;
  link?: string;
}

interface Category {
  id: number;
  depth: number;
  numchild: number;
  category_image?: string;
  logo_image?: string;
  menu_image?: string;
  locale: Record<string, Locale>;
  path_to_top: number[];
  childs?: Category[];
}

export type TreeData = Category[];
