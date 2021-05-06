const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const ClothingType = new GraphQLObjectType({
    name: 'Shirt',
    fields: () => ({
        id: {type:GraphQLString },
        name: {type: GraphQLString},
        color: {type: GraphQLString}
    })
})