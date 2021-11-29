import Link from 'next/link';

type Collection = {
  id: string;
  text: string;
};

const collections: Collection[] = [
  { id: '/products', text: 'All Products' },
  { id: '/about', text: 'About' },
  { id: '/checklist', text: 'Checklist' },
  { id: '/secrets', text: 'Secret' },
];

export default function Navigation() {
  return (
    <nav className="hidden lg:block text-center">
      <ul className="md:flex items-center justify-center">
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link href={`${collection.id}`}>
              <a className="block p-4 hover:opacity-80">{collection.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
