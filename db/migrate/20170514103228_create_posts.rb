class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :slug
      t.string :blurb
      t.text :content
      t.boolean :pinned, default: false

      t.timestamps
    end
  end
end
