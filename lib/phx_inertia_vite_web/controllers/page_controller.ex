defmodule PhxInertiaViteWeb.PageController do
  use PhxInertiaViteWeb, :controller

  def index(conn, _params) do
    require Logger
    render_inertia(conn, "Home", props: %{message: "it works!"})
  end
end
