import React from "react";
import {Grid} from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";

export interface ItemListProps {
    list: ItemProp[];
}

export interface ItemProp {
    id: number;
    name: string;
    price: string;
    category?: string;
    product_type: string;
    image_link: string;
}

export default function ItemList({list}: ItemListProps) {
    return (
        <>
            <Grid columns={3}>
                <Grid.Row>
                    {list.map(item => {
                        return (
                            <Grid.Column key={item.id}>
                                <Link href={`/view/${item.id}`}>
                                    <a className={styles.detailLink}>
                                        <img src={item.image_link} alt={item.name} className={styles.itemImg}/>
                                        <span className={styles.itemName}>{item.name}</span>
                                        <span className={styles.itemCategory}>
                                    {item.category ?? "none"}<span
                                            className={styles.categoryDivider}>{""}</span>{item.product_type}
                                </span>
                                        <span className={styles.itemPrice}>${item.price}</span>
                                    </a>
                                </Link>
                            </Grid.Column>
                        )
                    })}
                </Grid.Row>
            </Grid>
        </>
    );
}