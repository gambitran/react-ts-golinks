import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface LinkItem {
    id: number;
    name: string;
    description: string;
    url: string;
    views: number;
}

export interface CreateLinkItem {
    name: string;
    description: string;
    url: string;
}

export interface DeleteLinkItem {
    id: number;
}

export type LinkItems = Array<LinkItem>

export const backendApi = createApi({
    reducerPath: 'links',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    tagTypes: ['Links'],
    endpoints: (builder) => ({
        getLinks: builder.query<LinkItems, void>({
            query: () => 'links',
            providesTags: ['Links'],
        }),
        createLink: builder.mutation({
            query: (newLink: CreateLinkItem) => ({
                url: 'link',
                method: 'POST',
                body: newLink
            }),
            invalidatesTags: ['Links']
        }),
        updateLink: builder.mutation({
            query: (newLink: LinkItem) => ({
                url: 'link',
                method: 'PUT',
                body: newLink
            }),
            invalidatesTags: ['Links']
        }),
        deleteLink: builder.mutation({
            query: (id: DeleteLinkItem) => ({
                url: 'link',
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Links']
        })
    })
});

export const { useGetLinksQuery, useCreateLinkMutation, useUpdateLinkMutation, useDeleteLinkMutation } = backendApi;
