import { CATEGORIES } from "@/data/categories";
import { formatPathname } from "@/utils/formatString";
import Link from "next/link";
import styles from "./page.module.css";

export default function PickACategory() {
    return (
        <div className={styles.container}>
            <h1 className="gradient-text large">
                Pick a Category
                <span className="first-span">Pick a Category</span>
                <span className="second-span">Pick a Category</span>
            </h1>
            <div className={styles["links-container"]}>
                {CATEGORIES.map((category) => (
                    <Link
                        href={`/game/${formatPathname(category)}`}
                        key={category}
                    >
                        {category.toUpperCase()}
                    </Link>
                ))}
            </div>
        </div>
    );
}
