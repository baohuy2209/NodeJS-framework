"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav>
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.scg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>
    </nav>
  );
};
export default Nav;
