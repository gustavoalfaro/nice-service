import { Context } from '.'

const resolvers = {
  Query: {
    async user (source, { username }, { db }: Context, info) {
      const author = await db.user.findOne({ where: { username }})

      return author
    },
  },
  User: {
    async telephones ({ id }, args, { db }: Context) {
      const telephones = await db.telephone.findMany({ where: { user: { id }}})

      return telephones
    },

    async otherField({ id }, args, { db }: Context) {
      const otherField = await db.oneToMay.findMany({ where: { user: { id }}})

      return otherField
    },

    async __resolveReference({ id }, { db }) {
      const [author] = await db.select('Author', { id })

      return author
    },
  },
}

export default resolvers