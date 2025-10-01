import { v4 as uuidv4 } from 'uuid';

export interface BlogModel {
    id: number;
    uuid: string;
    title: string;
    subtitle: string;
    content: string;
    created: Date | string;
}

export function createBlogModel(id: number, title: string, subtitle: string, content: string) : BlogModel  {
    return {
        id,
        uuid: uuidv4(),
        title,
        subtitle,
        content,
        created: new Date()
    }
}