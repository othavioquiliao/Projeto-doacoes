import type { Actions } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const actions: Actions = {
	criarDoacao: async (event) => {
		const formData = Object.fromEntries(await event.request.formData()) as {
			nome: string;
			quantidade: string;
		};
		const nome = formData.nome;
		const quantidade = formData.quantidade;

		try {
			// Validar os dados
			if (!formData.nome || !formData.quantidade) {
				return {
					status: 400,
					body: {
						message: 'Dados inválidos'
					}
				};
			}

			// Verificar se o item já existe com base no nome
			const existingItem = await prisma.itens.findFirst({
				where: { nome }
			});

			if (existingItem) {
				// Item já existe, atualize a quantidade
				await prisma.itens.update({
					where: { nome },
					data: {
						quantidade: {
							increment: parseInt(quantidade) // Incrementa a quantidade existente
						}
					}
				});
			} else {
				// Item não existe, crie um novo item
				await prisma.itens.create({
					data: {
						nome,
						quantidade: parseInt(quantidade),
						categoria: 'perecivel'
					}
				});
			}

			return {
				status: 200,
				body: { message: 'Doação criada ou atualizada com sucesso' }
			};
		} catch (error) {
			console.error('Erro ao criar ou atualizar o item:', error);
			return {
				status: 500,
				body: { message: 'Erro interno do servidor' }
			};
		}
	}
};
