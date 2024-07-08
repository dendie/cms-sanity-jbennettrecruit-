import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactUs',
  title: 'Contact Us',
  type: 'document',
  fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'button',
            title: 'Button',
            type: 'object',
            fields: [
                {
                    name: 'href',
                    title: 'Link',
                    type: 'url',
                },
                {
                    name: 'name',
                    type: 'string',
                    title: 'Name'
                },
            ]
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
        }),
    ]
})