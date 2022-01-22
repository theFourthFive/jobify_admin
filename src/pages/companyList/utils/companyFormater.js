// prettier-ignore
export default function companyFormater (company) {
  const id = company.companyId;
  // const businessField = company.Bussinessfield
  const email = company.Email;
  const avatar = company.imageUrl ?? ""
  const businessField = company.Bussinessfield

  const { label, phoneNumber, createdAt, updatedAt, status } = company;

  return { id, label, businessField, email, avatar, phoneNumber, createdAt, updatedAt, status };
}
