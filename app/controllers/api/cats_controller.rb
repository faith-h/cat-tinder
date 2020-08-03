class Api::CatsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_cat, only: [:destroy]

  def index
    render json: User.random_cat(current_user.liked_cats)
  end

  def update
    current_user.liked_cats << params[:id].to_i
    current_user.save
  end

  def my_cats
    render json: User.liked(current_user.liked_cats)
  end

  def destroy
    @cat.destroy
  end

  private

  def set_cat
    @cat = Cat.find(params[:id])
  end

end