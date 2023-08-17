import { SectionWrapper } from "../hoc";
import { navLinks } from "../constants";

const Footer = () => {
    return (
        <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="*" class="hover:underline">Baz Development</a>. All Rights Reserved.
                </span>
                <ul class="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`text-gray-500 hover:text-white text-[18px] font-medium cursor-pointer`}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default SectionWrapper(Footer, "footer");