export default async function CharacterDetails({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mb-4">{children}</main>;
}
