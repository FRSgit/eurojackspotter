import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client'

Vue.use(VueApollo)

const AUTH_TOKEN = 'apollo-token' // Name of the localStorage item
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || '/graphql'

const defaultOptions = {
  httpEndpoint, // You can use `https` for secure connection (recommended in production)
  tokenName: AUTH_TOKEN, // LocalStorage token
  persisting: false,
  websocketsOnly: false,
  ssr: false,
}

export function createProvider (options = {}) {
  const { apolloClient } = createApolloClient({
    ...defaultOptions,
    ...options,
  });

  return new VueApollo({
    defaultClient: apolloClient, 
    errorHandler (error) {
      // eslint-disable-next-line no-console
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    },
  });
}
