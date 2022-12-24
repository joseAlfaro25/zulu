import { Response } from "../api";

export const getProduct = () => Response.get("");

export const getProductDetails = (id: string) => Response.get(`/${id}`);
