const graphql = require('graphql');
//grab properties from package
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
//define type
const ClothingType = new GraphQLObjectType({
    name: 'Shirt',
    fields: () => ({
        id: {type:GraphQLString },
        name: {type: GraphQLString},
        color: {type: GraphQLString}
    })
});
//how we jump into graph
const RootQuery = new GraphQLObjectType({
name: 'RootQueryType',
fields: {
    shirt:{
        type: ClothingType,
        args:{ id: {type: GraphQLString} },
        resolve(parent,args){
            //code to get data from db
            
        }
    }
}
});

modules.exports = new graphql.GraphQLSchema({
    query: RootQuery
})