defmodule PhxInertiaViteWeb.PageController do
  use PhxInertiaViteWeb, :controller

  def index(conn, _params) do
    render_inertia(conn, "Home")
  end
end
