export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            }
        },
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {   // url or unique string
            name: "slug",
            title: "Slug",
            type: "slug",   // generates unique identifier
            options: {
                source: "name",
                maxLength: 90,
            }
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        },
        {
            name: "details",
            title: "Details",
            type: "string",
        }
    ]
}