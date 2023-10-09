import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load: PageServerLoad = async () => {
	return {
		estoquePerecivel: await prisma.itens.findMany({
			where: {
				categoria: 'perecivel'
			}
		})
	};
};
