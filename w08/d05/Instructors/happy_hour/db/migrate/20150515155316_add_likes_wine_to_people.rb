class AddLikesWineToPeople < ActiveRecord::Migration
  def change
    add_column :people, :likes_wine, :boolean
  end
end
