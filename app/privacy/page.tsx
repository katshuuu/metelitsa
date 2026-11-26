import { Article } from "@/components/layout/Article";
import { contacts, organization } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Политика конфиденциальности",
  "Как оркестр «Метелица» обрабатывает данные заявок с сайта.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <Article eyebrow="Документы" title="Политика конфиденциальности">
      <p>
        Оператор: {organization.legalName}, ИНН {organization.inn}, ОГРН {organization.ogrn}, {contacts.addressLine}, {contacts.city}, {contacts.postalCode}, {contacts.email}.
      </p>
      <p>
        Через форму заявки сайт получает имя, название организации, телефон или e-mail и текст сообщения. Эти сведения нужны, чтобы ответить на обращение о концерте или сотрудничестве. Отдельного согласия на рассылку форма не запрашивает.
      </p>
      <p>
        Заявка пока сохраняется в журнале сервера. Когда будет подключена почта, те же поля уйдут в концертный отдел. Срок хранения — до ответа на обращение и не дольше, чем нужно для деловой переписки.
      </p>
      <p>
        TODO: текст политики нужно утвердить у юридического отдела оркестра. На исходном сайте отдельной политики не опубликовано.
      </p>
    </Article>
  );
}
