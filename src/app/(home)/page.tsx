import Link from "next/link";

const Page = () => {
  return (
    <div>
      <p>
        <Link href="/shared">Shared Page</Link>
      </p>
      <p>
        <Link href="/folder">Folder Page</Link>
      </p>
    </div>
  );
};

export default Page;
