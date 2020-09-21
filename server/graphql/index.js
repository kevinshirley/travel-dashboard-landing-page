const { 
  GraphQLObjectType, 
  GraphQLInt, 
  GraphQLString, 
  GraphQLID, 
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql');

// Mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addItinerary: {
      type: ItineraryType,
      args: {
        tripInformation: { type: TripInformationInputType },
        tripItinerary: { type: GraphQLList(TripItineraryInputType) },
      },
      resolve(parent, args) {
        console.log({ args });
        return args;
        // AWS.config.update(aws_creds.remote_config);
        // const db = new AWS.DynamoDB.DocumentClient();
        // const itinerary_id = uuidv4();

        // const params = {
        //   TableName: aws_creds.itineraries_table_name,
        //   Item: {
        //     itinerary_id: itinerary_id,
        //     createdAt: moment().format(),
        //     country: args.tripInformation.country,
        //     tripInformation: args.tripInformation,
        //     tripItinerary: args.tripItinerary,
        //   }
        // };

        // console.log({ args });

        // db.put(params, function(err, data) {
        //   if (err) {
        //     console.log('aws error', err);
        //     return err;
        //   }

        //   console.log('aws success');

        //   return params.Item;
        // });

        // return params.Item;
      }
    }
  }
});
