# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

# Configures the endpoint
config :phx_inertia_vite, PhxInertiaViteWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "DqhhrAS2VLDPIR7YMlkw28iDM7TU62LD7rAkADble9ebWsEqr5vbCCGXAe96Ksqk",
  render_errors: [view: PhxInertiaViteWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: PhxInertiaVite.PubSub,
  live_view: [signing_salt: "v0G2CXa7"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :inertia_phoenix,
  # default 1
  assets_version: 1,
  # default app.html
  inertia_layout: "app.html"

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
