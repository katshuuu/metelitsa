import { Article } from "@/components/layout/Article";
import { LinkArrow } from "@/components/ui/LinkArrow";

export default function NotFound() {
  return (
    <Article eyebrow="404" title="Страница не найдена" lede="Такого адреса на сайте оркестра нет.">
      <LinkArrow href="/">На главную</LinkArrow>
    </Article>
  );
}
