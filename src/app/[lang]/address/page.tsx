import { Params } from "../../../types/params";
import { getDictionary } from "../dictionaries";

const Address: React.FC<Params> = async ({ params }) => {
  const awaitedParams = await params;
  const dictionaries = await getDictionary(awaitedParams.lang);
  return (
    <div>
      <h1>Address</h1>
      {dictionaries.footer.address}
    </div>
  );
};

export default Address;
